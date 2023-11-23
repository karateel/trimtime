export interface ScheduleEvent {
    title: string;
    with: string;
    time: { start: string; end: string };
    color: string;
    isEditable: boolean;
    id: string;
    description?: string;
}