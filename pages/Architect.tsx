import React, { useMemo, useState } from "react";

type ApiSuccess = { text: string };
type ApiError = { error: string };

const Architect: React.FC = () => {
  const [problem, setProblem] = useState("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const canSubmit = useMemo(() => problem.trim().length > 0 && !loading, [problem, loading]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult("");

    const trimmed = problem.trim();
    if (!trimmed) {
      setError("Please describe what you want the Architect to analyze.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/architect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem: trimmed }),
      });

      const data = (await res.json()) as ApiSuccess | ApiError;

      if (!res.ok) {
        setError("error" in data ? data.error : "Request failed");
        return;
      }

      if (!("text" in data) || typeof data.text !== "string") {
        setError("Unexpected response format from /api/architect");
        return;
      }

      setResult(data.text);
    } catch (err: any) {
      setError(err?.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 920, margin: "0 auto", padding: "32px 16px" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Architect</h1>
      <p style={{ opacity: 0.8, marginTop: 0, marginBottom: 20 }}>
        Describe what you want analyzed. This page calls <code>/api/architect</code>.
      </p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          placeholder="Example: Diagnose why my homepage converts poorly and suggest a revised structure."
          rows={8}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.15)",
            fontSize: 14,
            lineHeight: 1.4,
          }}
        />

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button
            type="submit"
            disabled={!canSubmit}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "none",
              cursor: canSubmit ? "pointer" : "not-allowed",
              opacity: canSubmit ? 1 : 0.6,
            }}
          >
            {loading ? "Generating..." : "Generate"}
          </button>

          <button
            type="button"
            onClick={() => {
              setProblem("");
              setResult("");
              setError("");
            }}
            disabled={loading}
            style={{
              padding: "10px 14px",
              borderRadius: 10,
              border: "1px solid rgba(0,0,0,0.15)",
              background: "transparent",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {error ? (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 10,
            background: "rgba(255,0,0,0.06)",
            border: "1px solid rgba(255,0,0,0.2)",
            whiteSpace: "pre-wrap",
          }}
        >
          {error}
        </div>
      ) : null}

      {result ? (
        <div
          style={{
            marginTop: 16,
            padding: 16,
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.15)",
            whiteSpace: "pre-wrap",
            lineHeight: 1.5,
          }}
        >
          {result}
        </div>
      ) : null}
    </div>
  );
};

export default Architect;

