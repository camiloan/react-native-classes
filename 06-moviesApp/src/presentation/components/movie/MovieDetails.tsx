import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {FlatList} from 'react-native-gesture-handler';
import {Cast} from '../../../core/entities/cast.entity';
import {CastActor} from '../cast/CastActor';

interface Props {
  movie: FullMovie;
  cast: Cast[];
}
export const MovieDetails = ({movie, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#000'}}>{movie.rating}</Text>
          <Text style={{marginLeft: 5, color: '#000'}}>
            - {movie.genres.join('. ')}
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          History
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{movie.description}</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Budget
        </Text>
        <Text style={{color: 'black', fontSize: 18}}>
          {Formatter.currency(movie.budget)}
        </Text>
        {/* Casting */}
        <View style={{marginTop: 10, marginBottom: 50}}>
          <Text
            style={{
              color: 'black',
              fontSize: 23,
              marginVertical: 10,
              fontWeight: 'bold',
              marginHorizontal: 20,
            }}>
            Actors
          </Text>
          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <CastActor actor={item} />}></FlatList>
        </View>
      </View>
    </>
  );
};
