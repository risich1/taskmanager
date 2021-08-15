export default {
    actions: {
        async getTasks(ctx) {
            const res = await fetch('/api/task/')

            const tasks = await res.json()

            ctx.commit('updateTasks', tasks)
        },

        async addTask(ctx, task) {

            const res = await fetch('/api/task', {
                method: 'POST',
                cache: 'no-cache',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                    // "X-CSRF-TOKEN": token
                  },
                body: JSON.stringify(task)
            })

            const result = await res.json()
            console.log(result);
            if(result.status == 'success')
            {
                task.id = result.id;
                console.log(task);
                ctx.commit('addTask', task)
                return true;
            }

            return false;
        },

        async updateTask(ctx, data) {
     
            const res = await fetch('/api/task/' + data.id, {
                method: 'PUT',
                cache: 'no-cache',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                    // "X-CSRF-TOKEN": token
                  },
                body: JSON.stringify(data)
            })

            const result = await res.json()
            console.log(result);
            if(result.status == 'success')
            {
                ctx.commit('updateTask', data);
                return true;
            }

            return false;
        },

        async deleteTask(ctx, taskId) {
            const res = await fetch('/api/task/' + taskId, {
                method: 'DELETE',
                cache: 'no-cache',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                    // "X-CSRF-TOKEN": token
                  },
                body: {}
            })
            
            const result = await res.json()

            if(result.status == 'success')
                ctx.commit('deleteTask', taskId);

            return true;
        },

        async getTask(ctx, taskId)
        {
            const res = await fetch('/api/task/' + taskId, {
                method: 'GET',
                cache: 'no-cache',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                    // "X-CSRF-TOKEN": token
                  },
              
            })

            const result = await res.json();

            if(result.task)
                ctx.commit('setCurrentTask', result.task);
        }
    },
    mutations: {
        updateTasks(state, tasks) {
            state.tasks = tasks
        },

        updateTask(state, data) {
            const taskArr = state.tasks.filter(i => i.id === data.id);
            const task = taskArr.pop();
            const taskKey = [...taskArr.keys()].pop();

            Object.keys(task).forEach(k => { if(data[k]) task[k] = data[k] });

            state.tasks[taskKey] = task;
        },

        addTask(state, task) {
            state.tasks.push(task);
        },

        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },

        setCurrentTask(state, task) {
            state.currentTask = task;
        }
    },
    state: {
        currentTask: {},
        tasks: []
    },
    getters: {
        tasksByColumnId: state => columnId => {
            return state.tasks.filter(task => task.column_id == columnId);
        },

        getCurrentTask: state => state.currentTask,
    }
}