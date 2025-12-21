# Fix HomePage.tsx Syntax Error Plan

## Problem

- **Error**: `[plugin:vite:react-swc] × Expected ',', got '{'` at line 1482
- **Root Cause**: `<script>` tag with `dangerouslySetInnerHTML` placed outside JSX return statement
- **Location**: `/home/roby047/sewa-mobil-surabaya/src/pages/HomePage.tsx` at the end of the file

## Analysis

The script tag containing JavaScript code for performance optimizations is placed outside the component's return statement, which violates React's JSX syntax rules. In React components, all JSX elements must be returned within the return statement.

## Solution Plan

### Step 1: Move Script Content to useEffect Hook

- Import `useEffect` from React (if not already imported)
- Move the JavaScript code from `dangerouslySetInnerHTML` to a `useEffect` hook
- Clean up the script execution logic to work within React's lifecycle

### Step 2: Remove Invalid Script Tag

- Remove the `<script>` tag that's outside the JSX return statement
- Ensure the component structure is valid React syntax

### Step 3: Test and Verify

- Check that the component compiles without syntax errors
- Verify that the performance optimizations still work correctly

## Code Changes Required

### Before (Invalid):

```jsx
    </main>

    {/* Performance Optimizations & Animations Script */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // JavaScript code here
        `
      }}
    />
  );
}
```

### After (Valid):

```jsx
    </main>
  );
}
```

And add at the top:

```jsx
import React, { useEffect } from "react";

// Inside component:
useEffect(() => {
  // JavaScript code here
}, []);
```

## Expected Outcome

- Fix syntax error
- Maintain functionality of performance optimizations
- Component should compile and run without errors
