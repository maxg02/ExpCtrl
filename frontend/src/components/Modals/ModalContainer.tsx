import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";

type modalBody = {
    closingHandler: () => {
        payload: undefined;
        type: "createModal/hideModal" | "detailsModal/hideModal";
    };
    children: React.ReactNode;
    title: string;
};

function ModalContainer({ closingHandler, children, title }: modalBody) {
    return (
        <div className="absolute left-0 h-[100vh] w-[100vw] bg-black bg-opacity-40 flex px-4">
            <div className="bg-custom-ly1 m-auto w-full max-w-96 infoContainer1 shadow-[0_0_5px_1px_rgba(0,0,0,0.35)]">
                <div className="grid grid-cols-3 w-full">
                    <p className="col-start-2 m-auto">{title}</p>
                    <button
                        className="ml-auto tableButton flex gap-x-2 p-0 items-center xl:opacity-70 hover:opacity-100"
                        onClick={closingHandler}
                    >
                        <HugeiconsIcon
                            size={20}
                            strokeWidth={2}
                            icon={Cancel01Icon}
                            className="text-custom-accent"
                        />
                    </button>
                </div>
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-y-3 w-full">
                    {children}
                </form>
            </div>
        </div>
    );
}

export default ModalContainer;
