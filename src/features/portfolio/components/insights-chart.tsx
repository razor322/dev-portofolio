"use client"

import { cn } from "@/lib/utils"
import Grid from "@/components/charts/grid"
import LineChart, { Line } from "@/components/charts/line-chart"
import { ChartTooltip } from "@/components/charts/tooltip"

export default function InsightsChart({
  data,
}: {
  data: Record<string, unknown>[]
}) {
  if (data.length === 0) {
    return (
      <div className="grid aspect-2/1 w-full place-content-center sm:aspect-3/1">
        <p className="text-muted-foreground">No insights available.</p>
      </div>
    )
  }

  return (
    <figure className="relative">
      <LineChart
        className={cn(
          "sm:aspect-3/1!",
          "[--chart-1:var(--color-zinc-900)] [--chart-2:var(--color-zinc-400)]",
          "dark:[--chart-1:var(--color-zinc-100)] dark:[--chart-2:var(--color-zinc-600)]"
        )}
        data={data}
        margin={{ top: 16, right: 32, bottom: 40, left: 32 }}
      >
        <Grid horizontal />
        <Line
          dataKey="total_sessions"
          stroke="var(--chart-2)"
          strokeWidth={2}
        />
        <Line
          dataKey="unique_visitors"
          stroke="var(--chart-1)"
          strokeWidth={2}
        />
        <ChartTooltip
          rowLabels={{
            total_sessions: "Sessions",
            unique_visitors: "Unique Visitors",
          }}
        />
      </LineChart>

      <figcaption className="pointer-events-none absolute right-2 bottom-2 bg-background font-mono text-xs leading-none text-zinc-400 select-none sm:right-4 dark:text-zinc-700">
        FIG_002
      </figcaption>
    </figure>
  )
}
