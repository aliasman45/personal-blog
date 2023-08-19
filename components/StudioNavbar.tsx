import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
function StudioNavbars(props: any) {
  return (
    <div className="bg-black ">
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-white flex items-center gap-2">
          <ArrowUturnLeftIcon className="h-6 w-6" />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbars;
