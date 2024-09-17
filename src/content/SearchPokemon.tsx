import { Box, Button, Fieldset, Popover, SearchField, Text } from "gestalt";
import { useEffect, useRef, useState } from "react";

const SearchPokemon = () => {
  const [data, setData] = useState(() => null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pokemonError, setPokemonError] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [hideSearch, setHideSearch] = useState(true);
  const anchorRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

      try {
        const resp = await fetch(url);
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error("Network response was not ok.");
        }
        setData(data.results);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    getData();
  }, []);
  return (
    <Box ref={anchorRef}>
      <Fieldset dataTestId="choose-pokemon" legend="Choose a Pokemon">
        <Popover
          anchor={anchorRef.current}
          id="popover-search-pokemon"
          idealDirection="forceDown"
          onDismiss={() => setHideSearch(true)}
          positionRelativeToAnchor={false}
          size="xl"
        >
          <Box padding={2} width={300}>
            <SearchField
              accessibilityLabel="Demo Search Field"
              autoComplete="off"
              dataTestId="test-searchfield"
              id="searchField"
              onChange={({ value }: any) => {
                setSearchValue(value);
              }}
              onFocus={() => setHideSearch(false)}
              placeholder="Search your pokemon"
              onBlur={() => {
                setPokemonError("Pokemon not found");
                // @ts-ignore:next-line
                return data?.map(
                  (pokemon: any) =>
                    (pokemon.name === searchValue || searchValue === "") &&
                    setPokemonError(""),
                );
              }}
              value={searchValue}
              size="lg"
              errorMessage={pokemonError}
            />
            {!!!hideSearch && (
              <Box overflow="scroll">
                {loading ? (
                  <Box>Loading...</Box>
                ) : error ? (
                  <Box>Error: {error}</Box>
                ) : (
                  <Box maxHeight={110}>
                    {!!!loading && data ? (
                      // @ts-ignore:next-line
                      data && data.map(
                        (pokemon: any) =>
                          pokemon.name.includes(searchValue) && (
                            <Box
                              data-test-id="filtered-pokemons"
                              key={pokemon.name}
                              padding={1}
                            >
                              <Button
                                key={pokemon.name}
                                dataTestId={pokemon.name}
                                onClick={() => {
                                  setSearchValue(pokemon.name);
                                  setHideSearch(true);
                                }}
                                size="sm"
                                text={pokemon.name}
                                fullWidth
                                color="semiTransparentWhite"
                              />
                            </Box>
                          ),
                      )
                    ) : (
                      <Text>Loading...</Text>
                    )}
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Popover>
      </Fieldset>
    </Box>
  );
};

export default SearchPokemon;
