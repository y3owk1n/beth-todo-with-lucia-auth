import { removeErrorMessageIfExistsBeforeHtmxRequest } from "@/lib/hyperscript";
import { Icons } from "./icons";
import { Input } from "./ui/input";

import {
  Modal,
  ModalAction,
  ModalCancel,
  ModalCloseButton,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  getDialogFromModalContent,
} from "@/components/ui/modal";

function TodoForm() {
  return (
    <>
      <div class="flex flex-row items-center space-x-3">
        <Input type="search" name="search" placeholder="search for notes..." />

        <Modal>
          <ModalTrigger variant="outline" size="icon" class="rounded-full p-0">
            <Icons.Plus class="w-4 h-4" />
          </ModalTrigger>
          <ModalContent
            hx-target="#todo-items"
            hx-post="/api/todos"
            hx-swap="beforeend"
            hx-ext="loading-states"
            data-loading-target="#todo-form-loader"
            data-loading-class-remove="hidden"
            data-loading-path="/api/todos"
            _={`${removeErrorMessageIfExistsBeforeHtmxRequest("#server-error")}
                on htmx:afterRequest
                    if detail.successful === false
                        put detail.xhr.responseText before #modal-footer in me
                    else reset() me 
                        then ${getDialogFromModalContent}
                        then close() from result
`}
          >
            <ModalCloseButton />
            <ModalHeader>
              <ModalTitle>Create New Todo</ModalTitle>
              <ModalDescription>
                Write something and let&apos;s get it going!
              </ModalDescription>
            </ModalHeader>

            <Input
              autofocus="true"
              type="text"
              name="content"
              placeholder="content"
            />
            <ModalFooter>
              <ModalCancel>Cancel</ModalCancel>
              <ModalAction data-loading-disable data-loading-busy>
                <Icons.loader2
                  id="todo-form-loader"
                  class="hidden mr-2 w-4 h-4 animate-spin"
                />
                Continue
              </ModalAction>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default TodoForm;
