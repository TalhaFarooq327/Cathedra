/**
 * Cathedra NYC — Flash Offer Schedule Utility
 *
 * Campaign Rules:
 * - Booksy campaign runs Mon Oct 12 – Sun Oct 18 (7 days total).
 * - Website timer operates in 3 distinct urgency phases:
 *     Phase 1: Mon Oct 12 00:00 (or current time if earlier) → Wed Oct 14 00:00:00 (2 days)
 *     Phase 2: Wed Oct 14 00:00 → Fri Oct 16 00:00:00 (2 days)
 *     Phase 3: Fri Oct 16 00:00 → Sun Oct 18 23:59:59 (3 days)
 * - After Sun Oct 18 23:59:59 (Mon Oct 19 00:00:00), the offer automatically expires
 *   and disappears permanently from the site.
 */

export const PHASES = [
  { id: 1, end: new Date('2026-10-14T00:00:00').getTime(), label: 'Phase 1: Ends Oct 14' },
  { id: 2, end: new Date('2026-10-16T00:00:00').getTime(), label: 'Phase 2: Ends Oct 16' },
  { id: 3, end: new Date('2026-10-18T23:59:59').getTime(), label: 'Phase 3: Ends Oct 18' },
];

/**
 * Returns the target end timestamp (ms) for the current active phase,
 * or null if all phases have completed.
 */
export function getActivePhaseTarget() {
  const now = Date.now();
  for (const phase of PHASES) {
    if (now < phase.end) {
      return phase.end;
    }
  }
  return null;
}

/**
 * Calculates remaining days, hours, minutes, seconds for a given target timestamp.
 */
export function calculateTimeLeft(targetMs) {
  if (!targetMs) return null;
  const difference = targetMs - Date.now();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
