import Link from "next/link";
import PropTypes from "prop-types";

export function NavLink({ href, icon: Icon, children }) {
  return (
    <Link
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-50"
      href={href}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
};
