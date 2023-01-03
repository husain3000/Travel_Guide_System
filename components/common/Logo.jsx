import clsx from "clsx";

export function Logo({ className }) {
  return (
    <div className="glitch-wrapper">
      <div className={clsx("glitch", className)} data-glitch="Travel Guide">Travel Guide</div>
    </div>
  )
}
