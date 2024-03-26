import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, pupular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* now Playing */}
        <PosterCarousel movies={nowPlaying} />
        {/* Popular */}
        <HorizontalCarousel movies={pupular} title="Popular" />
        {/* Top Rated */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />
        {/* UpComing */}
        <HorizontalCarousel movies={upcoming} title="UpComing" />
      </View>
    </ScrollView>
  );
};
