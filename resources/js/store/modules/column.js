export default {
    actions: {
       async getColumns(ctx) {
            const res = await fetch('/api/column')

            const columns = await res.json()

            ctx.commit('updateColumns', columns)
        }
    },

    mutations: {
        updateColumns(state, columns) {
            state.columns = columns;
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