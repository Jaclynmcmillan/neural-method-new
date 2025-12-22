import React, { useMemo, useState } from "react";

type ApiSuccess = {
  text?: string;
  result?: string;
  output?: string;
};

type ApiError = {
  error?: string;
  message?: string;
};

const Architect: React.FC = () => {
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const canSubmit = useMemo(
    () => problem.trim().length >= 10 && !loading,
    [problem, loading]
  );

  const run = async () => {
    setError("");
    setResult("");

    const prompt = problem.trim();
    if (prompt.length < 10) {
      setError("Add a little more detail (at least 10 characters).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/architect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problem: prompt }),
      });

      const data = (await res.json().catch(() => ({}))) as ApiSuccess & ApiError;

      if (!res.ok) {
        throw new Error(data.error || data.message || `Request failed (${res.status})`);
      }

      const text = data.text || data.result || data.output || "";
      if (!text) {
        throw new Error("API returned no text.");
      }

      setResult(text);
    } catch (e: any) {
      setError(e?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>Architect</h1>
      <p style={{ opacity: 0.8, marginTop: 0, marginBottom: 18 }}>
        Describe a product or workflow problem. I will return a structured diagnosis and directional solution.
      </p>

      <label style={{ display: "block", fontWeight: 600, marginBottom: 8 }}>
        What are we diagnosing
      </label>

      <textarea
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Example: Our homepage gets traffic but almost nobody books a call. The pricing page has high dropoff. We are not sure why."
        rows={7}
        style={{
          width: "100%",
          padding: 14,
          borderRadius: 12,
          border: "1px solid rgba(0,0,0,0.15)",
          fontSize: 16,
          resize: "vertical",
        }}
      />

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 14 }}>
        <button
          onClick={run}
          disabled={!canSubmit}
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            border: "none",
            cursor: canSubmit ? "pointer" : "not-allowed",
            opacity: canSubmit ? 1 : 0.6,
            fontWeight: 700,
          }}
        >
          {loading ? "Running..." : "Generate"}
        </button>

        <span style={{ opacity: 0.7 }}>
          Tip: include the user goal, where they drop off, and what you have already tried.
        </span>
      </div>

      {error ? (
        <div style={{ marginTop: 16, padding: 12, borderRadius: 12, background: "rgba(255,0,0,0.06)" }}>
          <strong>Error:</strong> {error}
        </div>
      ) : null}

      {result ? (
        <div style={{ marginTop: 18 }}>
          <h2 style={{ fontSize: 22, marginBottom: 10 }}>Output</h2>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              padding: 16,
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.12)",
              lineHeight: 1.5,
              fontSize: 15,
              overflowX: "auto",
            }}
          >
            {result}
          </pre>
        </div>
      ) : null}
    </div>
  );
};

export default Architect;
