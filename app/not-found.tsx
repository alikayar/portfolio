import StatusPage from "@/components/status-page";

export default function NotFound() {
  return (
    <StatusPage
      title="Page not found."
      description="The page you're looking for may have moved, or the link may be incorrect."
      illustration="/illustrations/not-found.svg"
    />
  );
}
