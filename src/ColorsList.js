export function ColorsList(){
    return(
        <div className="colors-container d-flex flex-column gap-4">
            {/* 1st set */}
            <div className="set d-flex justify-content-between gap-5">
                <div className="bg-primary w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Primary</div>
                    <div className="color-code mx-1">#4e73df</div>
                </div> 
                <div className="bg-success w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Success</div>
                    <div className="color-code mx-1">#1cc88a</div>
                </div>
            </div>

            {/* 2nd set */}
            <div className="set d-flex justify-content-between gap-5">
                <div className="bg-info w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Info</div>
                    <div className="color-code mx-1">#36b9cc</div>
                </div>
                <div className="bg-warning w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Warning</div>
                    <div className="color-code mx-1">#f6c23e</div>
                </div>
            </div>

            {/* 3rd set */}
            <div className=" set d-flex justify-content-between gap-5">
            <div className="bg-danger w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Danger</div>
                    <div className="color-code mx-1">#e74a3b</div>
                </div>
                <div className="bg-secondary w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Secondary</div>
                    <div className="color-code mx-1">#858796</div>
                </div>
            </div>

            {/* 4th set */}
            <div className="set d-flex justify-content-between gap-5">
            <div className="bg-light w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-secondary mx-1">Light</div>
                    <div className="color-code text-secondary mx-1">#f8f9fc</div>
                </div>
                <div className="bg-dark w-75 d-flex flex-column gap-1 justify-content-center">
                    <div className="color-name text-white mx-1">Dark</div>
                    <div className="color-code mx-1">#5a5c69</div>
                </div>
            </div>
        </div>
    )
}