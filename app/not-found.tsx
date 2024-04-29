import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="mt-10 h-[40vh] flex flex-col justify-center">
      <div className="text-5xl font-bold">
        Not Found <span className="text-destructive">404</span>
      </div>
      <div className="opacity-80">
        You had access to unusual route in the website, i suggest you to go
      </div>
      <div className="mt-2">
        <Button variant={"destructive"}>
          <Link href={"/"}>
            {" "}
            <div className="flex items-center gap-2">
              <div>
                <ArrowLeft size={15} />
              </div>
              <div>Go Back</div>
            </div>{" "}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
