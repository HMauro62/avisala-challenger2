export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'avisaladb',
    port: 5432,
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}