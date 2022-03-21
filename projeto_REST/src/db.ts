import { Pool } from 'pg';

const connectionString = 'postgres://rzjhakdn:npI4fkVXKKWt7RyMOZQJ6fLiCR6GC_BF@tuffi.db.elephantsql.com/rzjhakdn';

const db = new Pool({ connectionString });

export default db;