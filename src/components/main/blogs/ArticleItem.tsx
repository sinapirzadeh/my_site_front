import { motion } from "motion/react";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineHeart,
} from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function ArticleItem() {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="m-auto flex w-80 flex-col rounded-xl dark:bg-gray-600 bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <Link to={"/blog/1"}>
        <div className="relative  mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="../../../../public/imagss/projects/1.jpg" alt="" />
        </div>
        <div className="p-6">
          <h4 className="mb-2 block text-lg  dark:text-white">برنامه نویسی</h4>
          <p className="dark:text-gray-300">
            برنامه نویس چگونه است و با چه زبان های باید شروع کنیم ...
          </p>
          <div className="flex mt-3 dark:text-white">
            <span className="flex pl-3">
              <HiOutlineHeart size={20} />
              <span className="pr-1">0</span>
            </span>
            <span className="flex items-center">
              <HiOutlineChatBubbleLeftEllipsis size={20} />
              <span className="pr-1">0</span>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}