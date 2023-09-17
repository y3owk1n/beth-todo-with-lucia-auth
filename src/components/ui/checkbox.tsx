import { PropsWithChildren } from "@kitajs/html";
import { cn } from "util/classname-helper";
import { hx } from "util/hyperscript-helper";

/**
 * Checkbox component
 * @param {string} class - Use :before to style the checkbox
 */
function Checkbox({
  id,
  class: className,
  checked,
  children,
  _: hxs,
  ...props
}: PropsWithChildren<JSX.HtmlInputTag & Htmx.Attributes>) {
  return (
    <label
      id={`checkbox-${id}`}
      class="group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2"
      data-selected={`${checked}`}
    >
      <div style="border: 0px; clip: rect(0px, 0px, 0px, 0px); clip-path: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap;">
        <input
          aria-label="Option"
          type="checkbox"
          value=""
          checked={checked}
          _={hx(
            `on change
                get the closest <label /> to the parentElement of me
                then set checkBoxId to its @id
                then set currentCheckBox to result
                get the closest <svg /> to the parentElement of me
                then set currentSvg to result
                then set checkedState to event.target.checked
                if checkedState == true
                    then add [@data-selected=true] to #{checkBoxId}
                    then add [@data-selected=true] to the first <svg/> in currentCheckBox
                    then add [@stroke-dashoffset=44] to the first <polyline/> in currentCheckBox
                    then add [@style=transition: stroke-dashoffset 250ms linear 0.2s;] to <polyline/> in currentCheckBox
                end
                if checkedState == false
                    then add [@data-selected=false] to #{checkBoxId}
                    then add [@data-selected=false] to the first <svg/> in currentCheckBox
                    then add [@stroke-dashoffset=66] to the first <polyline/> in currentCheckBox
                    then add [@style=] to the first <polyline/> in currentCheckBox
                end
            on focus
                get the closest <label /> to the parentElement of me
                then set currentCheckBox to result
                add [@data-focus=true] to currentCheckBox 
                add [@data-focus-visible=true] to currentCheckBox 
            on blur
                get the closest <label /> to the parentElement of me
                then set currentCheckBox to result
                remove [@data-focus=true] from currentCheckBox 
                remove [@data-focus-visible=true] from currentCheckBox 
            `,
            hxs,
          )}
          {...props}
        />
      </div>
      <span
        aria-hidden="true"
        class={cn(
          "relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border before:border-input before:box-border after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-hover:before:bg-primary/5 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background group-data-[focus-visible=true]:ring-ring after:bg-primary after:text-primary-foreground text-primary-foreground w-5 h-5 mr-2 rounded-md before:rounded-md after:rounded-md before:transition-background group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200",
          className,
        )}
        _={`
            on mousedown
                get the closest <label /> to the parentElement of me
                then set currentCheckBox to result
                add [@data-pressed=true] to currentCheckBox 
            on mouseup
                get the closest <label /> to the parentElement of me
                then set currentCheckBox to result
                remove [@data-pressed=true] from currentCheckBox 
        `}
      >
        <svg
          aria-hidden="true"
          role="presentation"
          viewbox="0 0 17 18"
          class="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-4 h-3 transition-opacity"
          data-selected={`${checked}`}
        >
          <polyline
            fill="none"
            points="1 9 7 14 15 4"
            stroke="currentColor"
            stroke-dasharray="22"
            stroke-dashoffset={checked ? "44" : "66"}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></polyline>
        </svg>
      </span>
      <span class="relative text-foreground select-none text-medium transition-opacity before:transition-width">
        {children}
      </span>
    </label>
  );
}

export { Checkbox };
