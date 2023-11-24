export type NewBooking = {
    title?: string;
    with?: string;
    time: { start: string; end: string };
    isEditable: boolean;
    id: string;
    description?: string;
}