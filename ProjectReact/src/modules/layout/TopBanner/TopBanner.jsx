function TopBanner({ children }) {
  const styles = `py-1 m-1 text-sm font-bold text-center rounded-xl mb-[-1px] h-1
                  bg-blue-200 bg-[url('/images/top-banner.jpeg')] bg-cover bg-[50%_47%] bg-no-repeat]`;

  return (
    <div className={styles}>
      {children}
    </div>
  );
}

export default TopBanner;