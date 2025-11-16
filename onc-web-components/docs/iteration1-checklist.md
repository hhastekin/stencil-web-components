# Component Library – Iteration 1 Checklist  
_This checklist is for the first iteration of our component library: focusing on the `<onc-button>` component with minimal props/styling, in isolation._

## ✅ Iteration 1 Goal  
Build and validate the **`onc-button` component** with:
- A **color** prop (`color="neutral"` / `color="primary"`)  
- Internal styling via CSS (or scoped CSS)  
- Attribute → prop → class logic  
- Self‑contained build, consumed in plain HTML (no framework yet)

---

## 🛠 Tasks  
- [x] Choose project scaffold (see Note below)  
- [x] Create component folder: `src/components/onc-button/`  
- [x] Define the component in `onc-button.tsx`:
  ```ts
  @Prop({ reflect: true }) color: string = 'primary';
  ```
- [x] Implement render logic in `onc-button.tsx`:
  ```ts
  const resolvedColor = this.color === 'neutral' ? 'neutral' : 'primary';
  const classes = `button button--${resolvedColor}`;
  ```
- [x] Create `onc-button.css` with at least these classes:
  ```css
  .button--primary { /* primary styling */ }
  .button--neutral { /* neutral styling */ }
  ```
- [x] Add a build/version marker log in `onc-button.tsx`, for example:
  ```ts
  console.log('[onc-button build] v0.1‑iter1');
  ```
- [x] Build the component library  
- [x] Create a simple test page (`index.html`) with:
  ```html
  <onc-button color="neutral">Neutral Button</onc-button>
  ```
- [x] In browser DevTools:
  - Confirm you see the build marker log  
  - Confirm the host element has `color="neutral"`  
  - Confirm inside component console log shows `this.color === "neutral"`  
  - Confirm inner `<button>` has `class="button button--neutral"`  
  - Visually verify the button uses “neutral” styling  
- [x] If all the above pass, mark Iteration 1 as ✅  
- [x] Document any observations or issues  

---

## 🎯 Success Criteria  
- The `color` attribute on `<onc-button>` correctly influences the class and styling  
- Build output is correct and up‑to‑date  
- Component works in plain HTML (no framework)  
- No console errors or styling inconsistencies  

---

## 🔜 Later Iterations (High‑Level Only)  
- Add `variant` prop (`filled` / `stroke`)  
- Add `size` prop + disabled state + icon support  
- Integrate design tokens using CSS custom properties  
- Add consumption examples for Vue/Nuxt  
- Add consumption examples for React  
- Add AngularJS (1.8.2) wrapper  
- Improve packaging, versioning, and documentation  
- Start adding more components  

---

### 📝 Note: Scaffold Decision  
Use the **minimal Stencil starter** for Iteration 1.  
Move to a larger design‑system boilerplate later if needed.
