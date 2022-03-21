import React from "react";
import PetList from "../list/ListPet";

export default function Dashboard() {
  return (
    <div id="root">
      <div className="relative">
        <div className="pt-10 overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 lg:pt-2 pb-14">
          <div className="flex flex-col items-center justify-center px-4 mx-auto max-w-7xl lg:flex-row">
            <div className="flex-1 max-w-3xl sm:text-center lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <PetList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
