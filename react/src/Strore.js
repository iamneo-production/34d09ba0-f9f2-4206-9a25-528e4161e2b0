import { createStore } from "redux";

const Initialstate={
    insid : "987654321"
   
}

const store=createStore((state = Initialstate)=>state);

export default store;