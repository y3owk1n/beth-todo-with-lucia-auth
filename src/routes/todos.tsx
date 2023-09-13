import BaseHtml from "@/components/base-html";
import { NonDashboardLayout } from "@/components/layout/non-dashboard";
import TodoList from "@/components/todo-list";
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
import { getTodos } from "@/db/schema/todo";

export async function get() {
  const todos = await getTodos();

  return (
    <BaseHtml>
      <NonDashboardLayout>
        <div
          hx-get="/api/auth/session"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></div>
        <TodoList todos={todos} />
        <Modal>
          <ModalTrigger id="my_modal_1">Trigger</ModalTrigger>
          <ModalContent id="my_modal_1">
            <ModalCloseButton />
            <ModalHeader>
              <ModalTitle>Title</ModalTitle>
              <ModalDescription>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </ModalDescription>
            </ModalHeader>
            <ModalFooter>
              <ModalCancel>Cancel</ModalCancel>
              <ModalAction>Continue</ModalAction>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </NonDashboardLayout>
    </BaseHtml>
  );
}
