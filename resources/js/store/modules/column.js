export default {
    actions: {
       async getColumns(ctx) {
            const res = await fetch('/api/column')

            const columns = await res.json()

            ctx.commit('updateColumns', columns)
        },

       async addColumn(ctx, data) {
            const res = await fetch('/api/column', {
                method: 'POST',
                cache: 'no-cache',
                credentials: "same-origin",
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json, text-plain, */*",
                    "X-Requested-With": "XMLHttpRequest",
                  },
                body: JSON.stringify(data)
            })

            const result = await res.json()

            if(result.status == 'success')
            {
                ctx.commit('addIdToEmptyColumn', result.id)
                return true;
            }

            ctx.commit('deleteEmptyColumn', result.id)

            return false;
        }
    },

    mutations: {
        updateColumns(state, columns) {
            state.columns = columns;
        },

        addColumn(state, data) {
            state.columns.push(data);
        },

        updateColumn(state, data) {
            const taskArr = state.tasks.filter(i => i.id === data.id);
            const task = taskArr.pop();
            const taskKey = [...taskArr.keys()].pop();

            Object.keys(task).forEach(k => { if(data[k]) task[k] = data[k] });

            state.columns[taskKey] = task;
        },

        addIdToEmptyColumn(state, id)
        {
            const columnArr = state.columns.filter(i => !i.id);
            const column = columnArr.pop();
            const key = [...columnArr.keys()].pop();

            column.id = id;
            state.columns[key] = column;
        },

        deleteEmptyColumn(state) {
            state.columns = state.columns.filter(i => i.id);
        }
    },
    state: {
        columns: []
    },
    getters: {
        allСolumns(state) {
            return state.columns;
        },
    
    },
}