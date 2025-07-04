import "./task-1";
import "./task-2";
import "./task-3";
import "./task-4";
import "./task-5";
import "./task-6";
import "./task-7";
import "./task-8";

const outputDiv = document.getElementById("output")!;

function logToHtml(message: string) {
    const p = document.createElement("p");
    p.textContent = message;
    outputDiv.appendChild(p);
}

const originalConsoleLog = console.log;
console.log = function(message: string) {
    logToHtml(message);
    originalConsoleLog.apply(console, arguments);
};

console.log("Application initialized");
