import { Injectable } from '@nestjs/common';
import { TaskProps, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: TaskProps[] = [];

    getAllTasks() {
        return this.tasks;
    }

    createTask(createTaskDto: CreateTaskDto) {
        const createdId = uuid()

        this.tasks.push({
            ...createTaskDto,
            id: createdId,
            status: TaskStatus.TODO,
        });

        return createdId;
    }
}
