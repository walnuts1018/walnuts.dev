import { NodeSDK } from "@opentelemetry/sdk-node";
import { Resource } from "@opentelemetry/resources";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-proto";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { ATTR_SERVICE_NAME } from "@opentelemetry/semantic-conventions";

const sdk = new NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "walnuts.dev",
  }),
  traceExporter: new OTLPTraceExporter({
    url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/traces`, // http://default-collector.opentelemetry-collector.svc.cluster.local:4318
  }),
  metricReader: new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: `${process.env.OTEL_EXPORTER_OTLP_ENDPOINT}/v1/metrics`, // http://default-collector.opentelemetry-collector.svc.cluster.local:4318
    }),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
