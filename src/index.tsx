import React from "react";
import ReactDOM from "react-dom";

import { LocalStorage, Persistor } from "infrastructure";
import { TodoRepository } from "interface/repository";
import App from "interface/presenter";
import { TodoUsecase } from "usecase";

const storage = new LocalStorage("clean-architecure-todo");
const persistor = new Persistor(storage);
const todoRepository = new TodoRepository(persistor);
const usecase = new TodoUsecase(todoRepository);

ReactDOM.render(<App usecase={usecase} />, document.getElementById("app"));
