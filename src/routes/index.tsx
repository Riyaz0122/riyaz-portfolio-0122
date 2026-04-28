import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riyaz Shaik — Portfolio" },
      {
        name: "description",
        content:
          "Riyaz Shaik — Computer Science undergraduate passionate about AI, ML and scalable systems.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/portfolio.html"
      title="Riyaz Shaik Portfolio"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
