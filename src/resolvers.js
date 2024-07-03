import { updateArgument } from "@graphql-tools/utils";
import { con } from "./db.js";
import { dbQuery } from "./db.js";



export const resolvers = {

    Query: {

        async records() {
            const sql = await dbQuery("SELECT * from records");
            return (sql);


        },
        async record(_,  args ) {
            const sql = await dbQuery("select * from records where id = ?", [args.id]).then(data => data[0])
            return (sql);
            
        }


    },
    Record:{
        async comments(parent){
            const sql = await dbQuery("select * from comments where comment_id = ?", parent.id).then(data => data[0])
            console.log(parent)
            return (sql);        }
    },
    Mutation: {
        async createRecord(_, { name, position, level }, context) {
            let res = await dbQuery(`insert into records (name, position, level ) values ('${name}', '${position}','${level}')`);
            return { id: res.insertId, name, position, level }

        },
       
        async deleteRecord(_, args, context) {
            let res = await dbQuery( "delete from records where id = ?", [args.id]).then(data => data)
            return (res);
        },
        async updateRecord(_,args) {
           let res= await dbQuery( "update records SET ? where id = ?", [args, args.id]).then(data => data)
          console.log(args)
           return (res);
        }
        
    }
}