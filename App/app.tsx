import { createRoot } from 'react-dom/client';
import React from "react";
import UserForm from "./Components/userForm";

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<UserForm />);
