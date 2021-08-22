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
                ctx.commit('updateColumn', {id: result.id, name: data.name})
                return true;
            }

            ctx.commit('deleteEmptyColumn', result.id)

            return false;
        },

        async updateColumn(ctx, data) {
            const res = await fetch('/api/column/' + data.id, {
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
       
            if(result.status == 'success')
            {
                ctx.commit('updateColumn', data);
                
                return true;
            }

            return false;
        },

        async deleteColumn(ctx, cId) {
            const res = await fetch('/api/column/' + cId, {
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
                ctx.commit('deleteColumn', cId);

            return true;
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
       
            const colArr = state.columns.filter(i => i.id === data.id);
            const col = colArr.pop();
            const colKey = [...colArr.keys()].pop();

            Object.keys(col).forEach(k => { if(data[k]) col[k] = data[k] });

            state.columns[colKey] = col;
        },

        addIdToEmptyColumn(state, id)
        {
            const columnArr = state.columns.filter(i => !i.id);
            const column = columnArr.pop();
            const key = [...columnArr.keys()].pop();

            column.id = id;

            state.columns[key] = column;
            console.log(state.columns[key]);
        },

        deleteEmptyColumn(state) {
            state.columns = state.columns.filter(i => i.id);
        },

        deleteColumn(state, id) {
            state.columns = state.columns.filter(i => i.id !== id);
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