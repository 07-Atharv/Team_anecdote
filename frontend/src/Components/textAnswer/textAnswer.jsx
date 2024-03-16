import React from "react";

const TextAnswer = () => {
  return (
    <div>
      <textarea
        id="message"
        rows="4"
        disabled
        class="block mt-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."></textarea>
    </div>
  );
};

export default TextAnswer;
