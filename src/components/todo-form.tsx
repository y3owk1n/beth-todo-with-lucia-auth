import { Icons } from "./icons";
import { Button } from "./ui/button";
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
} from "@/components/ui/modal";

function TodoForm() {
  const createTodoModalId = "create-todo-modal";
  return (
    <>
      <div class="flex flex-row items-center space-x-3">
        <Input type="search" name="search" placeholder="search for notes..." />

        <Modal>
          <ModalTrigger id={createTodoModalId}>
            <Icons.Plus class="w-6 h-6 mr-2" />
            New
          </ModalTrigger>
          <ModalContent
            id={createTodoModalId}
            hx-target="#todo-items"
            hx-post="/api/todos"
            hx-swap="beforeend"
            hx-ext="loading-states"
            data-loading-target="#todo-form-loader"
            data-loading-class-remove="hidden"
            data-loading-path="/api/todos"
            _={`on htmx:beforeRequest remove #server-error
        on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText after me
            else reset() me then close() from #modal-${createTodoModalId} end`}
          >
            <ModalCloseButton id={createTodoModalId} />
            <ModalHeader>
              <ModalTitle>Create New Todo</ModalTitle>
              <ModalDescription>
                Write something and let&apos;s get it going!
              </ModalDescription>
            </ModalHeader>

            <Input type="text" name="content" placeholder="content" />
            <ModalFooter>
              <ModalCancel id={createTodoModalId}>Cancel</ModalCancel>
              <ModalAction id="submit" data-loading-disable data-loading-busy>
                <Icons.loader2
                  id="todo-form-loader"
                  class="hidden mr-2 w-6 h-6 animate-spin"
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
