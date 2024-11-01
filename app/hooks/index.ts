export async function handleUpdateUrl(filter: string, query: string) {
  const searchParams = new URLSearchParams(window.location.search);

  if (query === "All") {
    searchParams.delete(filter);
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    return newPathName;
  }
  searchParams.set(filter, query);
  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
}
