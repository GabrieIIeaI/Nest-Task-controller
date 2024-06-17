export interface TaskProps {
    id: string
    title: string
    description: string
    status: TaskStatus 
}

export enum TaskStatus {
    TODO = 'TODO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'   
}
