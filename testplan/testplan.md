# Counter App Test Plan

## Purpose
To ensure the counter behaves correctly and never shows negative values.

## Scenarios

### ✅ TC1: Initial Value
- Counter should start at 0

### ✅ TC2: Increment
- Click "increment" → shows 1

### ✅ TC3: Decrement
- Click "decrement" on 1 → goes back to 0

### ✅ TC4: Prevent Negative Values
- Click "decrement" on 0 → stays at 0

### 🔄 Optional: Rapid Clicks
- Rapid clicking increment → counts properly
