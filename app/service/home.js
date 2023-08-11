'use strict'

const Service = require('egg').Service;

class HomeService extends Service {
    async user() {
        const { ctx, app } = this;
        const QUERY_STR = 'id, name';
        // 获取 id 的 sql 语句
        let sql = `select ${QUERY_STR} from list`;
        try {
            // mysql 实例已经挂载到 app 对象下，可以通过 app.mysql 获取到
            const result = await app.mysql.query(sql);
            return result;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async addUser(name) {
        const { ctx, app } = this;
        try {
            const result = await app.mysql.insert('list', { name });
            return result;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async editUser(id, name) {
        const { ctx, app } = this;
        try {
            let result = await app.mysql.update('list', { name }, {
                where: {
                    id
                }
            });
            return result;
        } catch(error) {
            console.log(error);
            return null;
        }
    }

    async deleteUser(id) {
        const { ctx, app } = this;
        try {
            let result = await app.mysql.delete('list', {id});
            return result;
        } catch(error) {
            console.log(error);
            return null;
        }
    }
}

module.exports = HomeService;