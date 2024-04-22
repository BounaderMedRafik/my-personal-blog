import { SearchIcon } from "lucide-react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Search = () => {
  return (
    <div className="hidden md:block">
      <Dialog>
        <DialogTrigger>
          <SearchButton />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="font-bold opacity-50">Searching</div>
            </DialogTitle>

            <DialogDescription>
              <div className="text-xs">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                tempora quidem minima optio laborum natus!
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const SearchButton = () => {
  return (
    <>
      <div className="w-full hover:opacity-80 cursor-pointer bg-background rounded-full border transition-all border-black/10 px-3 py-2">
        <div className="text-xs gap-28 flex items-center justify-between opacity-50 group">
          <div className=" pointer-events-none select-none">
            Need Something?...
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all">
            <SearchIcon size={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
