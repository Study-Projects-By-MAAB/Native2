/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const data = [
  {
    id: 1,
    name: 'Shakil',
    email: 'Shakil123@gmail.com',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
  {
    id: 3,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
  },
];

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <View style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Text>Hello</Text>
          <Image
            style={styles.image}
            source={{
              uri: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/480879851_10015089978518594_6975596949791265783_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFq8GgT1dwgR5l_VXyhczDBwohhwVfKZtbCiGHBV8pm1m8Esc8AwUUoLNv85eqjESLVIVEmXwhGTwLYL3gkDW2v&_nc_ohc=q_iSl6rbMnYQ7kNvgEIT1Ns&_nc_oc=AdhVpEAlGetYRM7jzN3c5dv_qcbOn0uZNiukaRMISXY0EIp4FEjXQdVQjZIhvdz-wmA&_nc_zt=23&se=-1&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AbDMAszI3cum_m2C6Nlgpfq&oh=00_AYB7xCUc6elaINYqFx6d6uW9_KbuIVV3e_qu_XpOGO_XGg&oe=67C0CAE7',
            }}
          />
          <Button title="It jus a Static Button" />
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{backgroundColor: 'green', padding: 10, borderRadius: 5}}
            onPress={() => {
              Alert.alert('Hello');
            }}>
            <Text>It's Touchable Opacity button</Text>
          </TouchableOpacity>
          <Pressable style={{padding: 10, backgroundColor: 'yellow'}}>
            <Text>Pressable button</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <FlatList
            style={{
              padding: 10,
              width: '100%',
              flex: 1,
              backgroundColor: 'blue',
            }}
            data={data}
            numColumns={2}
            columnWrapperStyle={{gap: 10}}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
            renderItem={({item}) => (
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'red',
                  borderRadius: 50,
                  width: 100,
                }}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
              </View>
            )}
          />
        </View>
        <View style={{paddingRight: safePadding}}>
          <Header />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
