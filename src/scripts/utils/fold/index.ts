export type FoldStatus = typeof STATUS_FOLDED | typeof STATUS_UNFOLDED;

export const STATUS_FOLDED = "folded";
export const STATUS_UNFOLDED = "unfolded";

export function fold(body: HTMLDivElement): void {
  setBody(body, STATUS_FOLDED, 0);
}

export function unfold(body: HTMLDivElement): void {
  setBody(body, STATUS_UNFOLDED, body.scrollHeight);
}

function setBody(body: HTMLDivElement, status: FoldStatus, height: number): void {
  body.dataset.status = status;
  body.style.maxHeight = `${height}px`;
}
