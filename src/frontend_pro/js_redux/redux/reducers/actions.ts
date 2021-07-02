export type Task = {
 id: number;
 nam: string;
};

export type Comment = {
 id: number;
 taskId: number;
 body: string;
};

export const addTask = (task: Task) => ({
 type: 'ADD_TASK',
 payload: { task },
});

export const removeTask = (id: string) => ({
 type: 'TASK_REMOVE',
 payload: { id },
});

export const addTaskComment = (comment: Comment) => ({
 action: 'TASK_COMMENT_ADD',
 payload: { comment },
});

export const removeTaskComment = (id: string) => ({
 type: 'TASK_COMMENT_REMOVE',
 payload: { id },
});
