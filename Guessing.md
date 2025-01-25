```mermaid
flowchart TD
    A[Start] -->|Computer Chooses Number| B(Choose Number 1-10)
    B --> |User Choose Number| C{User Decision}
    C -->|Need to guess higher| D[Higher] --->|Guess again| C
    C -->|Error| E[Not in bounds of 1-10 or Not a number] --->|Guess again| C
    C -->|Need to guess lower| F[Lower] --->|Guess again| C
    C -->|Got it right| G[Correct]
    G ----> H[end]
```
>This flowchart shows how a guessing game would work when a computer chooses a number between 1-10. It accounts for error entries and if the user input is too high or too low. If the use guesses the correct number, the program ends.
