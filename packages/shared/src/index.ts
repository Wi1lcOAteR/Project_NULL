export type ServiceName = "web" | "api";

export type ServiceHealth = {
  service: ServiceName;
  status: "ok" | "degraded" | "down";
};
