import { VStack, Center, Text } from '@chakra-ui/react'
import Section from "../components/section";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Head from 'next/head';
import { NextPage } from 'next';

const Tos: NextPage = () => (
  <>
    <Head>
      <title>Regulamin usług - goxy.pl</title>
    </Head>

    <NavBar />

    <Center>
      <VStack maxWidth="70em" margin="0 1rem">
        <TosSection />

        <Footer />
      </VStack>
    </Center>
  </>
)

const TosSection = () => (
  <Section id="tos" title="Regulamin usług">
    <Text>
    {`
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum nulla eget fermentum volutpat. Phasellus non sapien non diam semper cursus sed vel ante. Donec sit amet pretium sapien. In hac habitasse platea dictumst. Maecenas turpis purus, semper at magna eget, volutpat finibus nisi. Sed nec maximus eros. Aliquam ut sapien dignissim, sollicitudin ipsum id, ultrices neque. In sed felis non ipsum efficitur scelerisque. Praesent sit amet enim non augue tincidunt hendrerit. Etiam tempus semper risus, quis viverra magna fermentum vitae. Vivamus vitae dolor sit amet arcu fermentum dictum.

    Morbi mattis, ligula quis elementum dapibus, ante est rhoncus urna, ac elementum tortor sem ut lacus. Nam non ipsum erat. Nulla molestie rhoncus sagittis. Nunc cursus vel justo a dignissim. Aliquam venenatis iaculis semper. Aliquam tempor fringilla nibh sed tincidunt. Maecenas dictum convallis facilisis. Sed vulputate lorem aliquam eros vestibulum aliquet. In sagittis, massa vel tempus sollicitudin, dui metus laoreet eros, vitae porttitor velit augue imperdiet nulla. Aliquam libero ipsum, gravida id lacinia euismod, venenatis id orci. Aliquam eget massa ligula. Sed eget pulvinar quam, id suscipit mi. Phasellus lacus turpis, venenatis eget est non, auctor condimentum neque. Sed vel dictum eros, non bibendum libero.
    
    Nam euismod quam eu eros auctor blandit eu in nisl. Aliquam eleifend sit amet risus eu feugiat. Nunc magna justo, consectetur quis tempus in, pulvinar vitae purus. Donec convallis neque mi, non elementum eros accumsan vel. Nam diam enim, vulputate at mattis vel, dignissim ut ipsum. Quisque elementum massa eu ipsum rutrum tristique. Pellentesque luctus ex eu malesuada aliquam. In imperdiet ullamcorper neque, sed fringilla purus tincidunt non. Nulla id justo vel nisl ultrices ullamcorper. Quisque fringilla sem nunc, placerat sodales augue tincidunt vel. Quisque molestie ac justo non auctor.
    
    Cras id nisi ac arcu cursus maximus sit amet eu felis. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non elementum neque, in luctus felis. Donec ac lectus blandit, dignissim est et, efficitur turpis. Donec at elit suscipit, mattis dolor gravida, consequat justo. Suspendisse orci ante, sollicitudin at tempor quis, imperdiet in tortor. Duis dictum, mi sit amet cursus consectetur, arcu massa posuere enim, vel dignissim ante tortor eu nisi. Quisque eget felis et metus varius lacinia. Nam pellentesque semper massa, eget lacinia lorem efficitur sit amet. Duis ultrices nec justo id interdum. Curabitur in vulputate est. Praesent est orci, molestie vel lacus a, consequat ultricies erat. Donec consequat mauris id tellus commodo, faucibus finibus urna rhoncus. Aliquam purus lacus, blandit et euismod sed, eleifend scelerisque nunc. Integer luctus suscipit est, eu sollicitudin turpis ultricies ac.
    
    Sed non imperdiet libero. Fusce in risus tristique, euismod massa ac, malesuada nibh. Maecenas tempor ante euismod odio porta, sit amet dapibus mauris lacinia. Cras eget pretium turpis. Integer vel fermentum nisi. Sed ultricies odio non euismod sodales. Duis a fermentum magna, ut ornare ipsum. Pellentesque nibh libero, pretium lacinia feugiat pharetra, vestibulum ac sapien. Proin porttitor ornare metus vel porttitor. Vestibulum vel rhoncus ligula. Fusce a sodales elit, ullamcorper condimentum lectus. Suspendisse dui nibh, sodales in ante auctor, pharetra lobortis nibh. In pharetra et erat et venenatis.
    
    Aenean pulvinar molestie leo, non luctus enim ornare feugiat. Nam facilisis felis non rutrum maximus. Fusce maximus ut eros ut maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus in est non erat iaculis pellentesque sed vitae turpis. Proin porta hendrerit urna sed suscipit. Phasellus elit felis, blandit at dui hendrerit, tempor fringilla felis. Quisque feugiat sollicitudin justo, eget pretium nisl tristique quis. Duis tempus efficitur quam, vel bibendum diam condimentum sit amet. In hac habitasse platea dictumst. Maecenas pulvinar malesuada ligula, in tincidunt felis placerat eget. Aliquam a erat porttitor, tempus orci vel, consectetur risus. Vivamus aliquam magna eget sem sodales, ac laoreet neque hendrerit.
    
    Duis sem urna, convallis ac consequat pellentesque, lacinia id purus. Nullam tempor diam quis auctor condimentum. Nulla turpis velit, congue sed molestie id, viverra quis leo. Suspendisse potenti. Pellentesque vel commodo erat, sit amet congue nisl. Vestibulum posuere id risus vitae feugiat. Donec at mollis mauris. Etiam semper consequat ante eu mollis. Praesent vestibulum arcu eu dui facilisis, sit amet porta purus congue. Cras tristique dapibus elit nec rhoncus. Praesent imperdiet nunc vel ante tincidunt dignissim. Suspendisse elit nunc, finibus eu fringilla vel, dignissim ut diam. Sed faucibus commodo lacinia. In fermentum faucibus leo, et blandit eros consectetur sit amet. Vestibulum luctus fermentum quam, sit amet venenatis orci porttitor et.
    
    Ut lorem dui, luctus ut eros non, dignissim lobortis enim. Nam id sapien vel felis porttitor blandit. Duis placerat mi sit amet feugiat ultricies. Nunc purus diam, pellentesque eu consectetur ut, interdum vel ante. Mauris cursus, lacus at sagittis bibendum, mi lacus tristique nibh, vel hendrerit sapien odio pretium risus. Integer sollicitudin id massa vitae congue. Donec et enim faucibus, placerat purus quis, tristique enim. In vehicula, felis in ultrices luctus, tortor ligula aliquet mi, quis ornare velit augue et sem. Phasellus cursus nibh posuere vulputate venenatis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris faucibus orci enim, ac malesuada leo tincidunt quis. Vestibulum vitae maximus nibh. Phasellus eros enim, tempor vitae tortor sit amet, rhoncus vulputate arcu. Sed eu egestas justo, vitae pharetra erat. Aliquam euismod, diam at consectetur laoreet, diam augue dapibus ligula, sed ornare dolor quam at turpis.
    
    Proin posuere pellentesque pellentesque. In molestie lacus sit amet pulvinar faucibus. Suspendisse dolor mi, elementum malesuada tincidunt et, gravida eget justo. Proin rhoncus dolor eros, quis tincidunt odio feugiat a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum lacus sit amet nulla blandit, elementum fermentum erat pretium. Ut volutpat orci ipsum, et rhoncus purus pretium at. Maecenas dui arcu, tempor eu ultrices a, mattis ut magna. Cras at blandit orci, id volutpat orci. Sed luctus ligula in dui aliquet laoreet. Mauris id condimentum nulla. Nam in ante in nibh sollicitudin facilisis sit amet quis magna. Nulla elementum risus vel urna elementum semper. Nunc quis tellus nisi. Nunc enim quam, euismod vitae imperdiet id, placerat quis orci.
    
    Vivamus accumsan nunc in vehicula blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse at urna fringilla, consequat ipsum ut, vestibulum leo. Sed pharetra ut dui ultricies vestibulum. Curabitur at lacus vel sem varius condimentum. In iaculis lectus ullamcorper, rutrum purus sit amet, maximus ligula. Maecenas ut consectetur nunc. Curabitur consectetur, nunc sed aliquam ultricies, nibh ex mollis odio, id malesuada augue urna eu tellus. Nam at ipsum orci. Cras facilisis dolor ac aliquet venenatis. Quisque eros nisl, porta vitae egestas ut, iaculis et nibh. Quisque pretium justo et urna hendrerit lacinia. Proin vel ligula lacus. Morbi eget nisi quis ex feugiat ullamcorper vitae ac arcu. Nam finibus, ipsum et laoreet malesuada, enim tortor tempus enim, vitae sollicitudin velit velit vitae arcu.
    
    Sed id purus viverra, accumsan urna et, rhoncus nisl. Aenean lacinia vestibulum orci non blandit. Donec elementum diam non posuere tincidunt. Mauris rhoncus nibh sed orci porta aliquam. Etiam tristique porttitor blandit. Ut tincidunt viverra libero, sed tempus lacus. Phasellus eget euismod nisl. Curabitur nisi erat, pharetra at sodales nec, mattis vel ante.
    
    Phasellus auctor ultricies arcu sit amet lacinia. In hac habitasse platea dictumst. Pellentesque vel arcu sed massa sagittis vestibulum at ut ex. In et fermentum risus. In laoreet neque lacus, ac placerat libero volutpat ut. Donec ipsum sapien, ornare a varius sed, tristique malesuada lorem. Nam eros enim, tempus in fringilla quis, accumsan id odio. Morbi eget quam pulvinar, fringilla felis nec, pulvinar arcu. Phasellus pharetra ex nec odio aliquet, ut elementum ex ullamcorper. In non mattis libero.
    
    Morbi nec aliquam diam. Ut consequat orci nec est pretium, quis maximus dolor ullamcorper. Nulla a lorem vel metus pulvinar aliquam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus luctus eu ligula et efficitur. Curabitur ante ex, interdum vitae accumsan a, consequat a urna. Etiam vitae ornare ante, et varius orci.
    
    Nunc ac lacus at sapien interdum tristique. Morbi mi velit, molestie eget nibh non, ullamcorper lobortis nunc. Sed elementum tempus mauris vitae euismod. Cras nec turpis justo. Fusce gravida lorem at ultricies suscipit. Nulla eget aliquam quam. Cras rutrum nulla odio, eget semper augue ornare at. Nulla facilisi. Praesent ut tristique enim. Aenean suscipit dolor nec quam viverra, id dictum tellus viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
    
    Vivamus odio nisl, consequat quis nulla ac, hendrerit malesuada ligula. Maecenas ullamcorper nunc eget leo interdum, ac molestie mauris finibus. Vestibulum sagittis elementum arcu in consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse porta diam vitae velit ultrices, pulvinar iaculis tortor lobortis. Morbi cursus mi non justo feugiat elementum. Vivamus gravida malesuada nunc quis semper.
    
    Suspendisse pretium ante nec ex auctor luctus. Phasellus blandit fringilla blandit. Nullam aliquet eget leo ut tempor. Nunc vehicula nisi quis dolor iaculis, nec tincidunt metus tempus. Sed ac diam ex. Cras fermentum, lectus sed tincidunt hendrerit, nisi turpis dignissim mauris, vitae ultrices velit tellus ut ipsum. Pellentesque vel sem malesuada, pharetra erat a, auctor purus.
    
    Integer auctor, neque vel facilisis mollis, elit nisi malesuada velit, ut egestas velit ligula eget orci. Suspendisse auctor vitae turpis sed blandit. Vivamus mattis maximus dolor id dictum. Integer placerat nibh a augue eleifend tempus. Phasellus maximus felis in arcu pretium, nec scelerisque ipsum sodales. Quisque imperdiet, lectus non malesuada elementum, justo leo rutrum nulla, quis tincidunt mauris lorem et ante. Donec eu sapien lorem. Suspendisse et libero bibendum, suscipit orci in, fringilla tortor. Aliquam in efficitur sem, eu congue ligula. Nullam in sollicitudin ipsum, non efficitur dolor.
    
    Vestibulum eget porta eros. Nullam posuere congue ultrices. Maecenas non euismod est, et cursus libero. Nam eleifend pulvinar tempus. Phasellus vestibulum augue nibh, eget ultrices urna ornare vitae. Nunc ac maximus ex. Aliquam erat volutpat. In hac habitasse platea dictumst. Nam laoreet luctus semper. Nullam pharetra viverra dolor vel suscipit. Aenean vitae nibh elit. Pellentesque vel ante ante. Phasellus faucibus eu ex at bibendum. Donec hendrerit, sapien in tristique rhoncus, felis urna pulvinar augue, sit amet aliquet magna lorem ac nunc. Nunc mauris nibh, fringilla vel nulla condimentum, volutpat faucibus nisl.
    
    Nulla id lacus consequat quam facilisis tempus. Integer magna sapien, commodo nec fermentum id, laoreet at lectus. Donec at turpis nec nunc tristique semper nec sed lorem. Phasellus tincidunt dictum tincidunt. Nulla in magna egestas mauris tincidunt luctus. Ut hendrerit lectus et imperdiet tempor. Vivamus accumsan ex eu arcu porttitor aliquet. Aliquam et magna ultrices, efficitur enim ac, ullamcorper lorem. Maecenas pretium, libero a convallis posuere, lorem erat accumsan ex, sed mollis neque libero id velit. Nam ut maximus dui. Sed ipsum tortor, convallis sed libero in, mollis porttitor sapien. Nunc vel leo elit. Integer vitae orci mi.
    
    Quisque ornare, dolor nec semper interdum, leo nunc vestibulum eros, non suscipit nisl felis mattis libero. Donec ut convallis felis. Nunc ultrices felis hendrerit mauris efficitur, lobortis malesuada nibh feugiat. Mauris blandit tellus at justo imperdiet, id vehicula nisi posuere. Fusce a risus sodales mi efficitur pretium ut sed diam. Donec vestibulum mi eget quam ultrices tempor. Maecenas porta non dui in tristique. Aenean enim mi, venenatis non vehicula non, pretium sit amet felis. Aliquam efficitur nisl ut sem hendrerit, ut ornare tellus condimentum. Morbi elit lorem, aliquam faucibus nulla eu, placerat aliquam ante. Vivamus hendrerit sapien ac velit lobortis, a interdum ante venenatis. Vivamus vitae velit vehicula, luctus dui id, egestas arcu. Praesent porta sapien sed massa consectetur sodales.
    
    Nulla gravida nec urna at pretium. Vivamus pellentesque mauris id consequat varius. Sed varius mollis bibendum. Vestibulum quis elit vitae libero tempus sodales. Praesent hendrerit sapien ac sapien pellentesque, et pharetra risus accumsan. Maecenas semper libero nulla, sit amet rutrum nisl hendrerit vel. Sed quis porta lacus. Integer tempus justo a metus suscipit pellentesque. Morbi ut elit eu libero ullamcorper euismod. Etiam eu pulvinar neque. Fusce vehicula, neque at viverra volutpat, urna ex maximus nunc, vel laoreet erat sem in massa. Vestibulum laoreet ex ut neque tincidunt, et malesuada ante facilisis. Etiam ac mi hendrerit, hendrerit ipsum et, commodo ipsum. Praesent egestas velit in lacus sodales vestibulum.
    
    Ut bibendum, augue et gravida condimentum, massa erat vulputate tortor, a eleifend lacus purus at leo. Mauris semper ultricies tempor. Morbi vitae laoreet urna, nec cursus neque. Cras pharetra convallis placerat. Nullam eget augue sed mauris cursus imperdiet. Pellentesque finibus augue ante, id efficitur orci aliquam ut. Nam elementum semper diam id tempus.
    
    Vivamus sed lacus sed augue faucibus pharetra et ut sem. Quisque iaculis tellus ut orci gravida euismod. In et diam lacus. Aenean nec dictum justo, ut ornare ex. Suspendisse eu leo mi. Suspendisse eu volutpat massa. Phasellus vitae odio congue, porttitor elit non, feugiat nisi. Vivamus massa lacus, hendrerit sed eros vel, condimentum elementum massa. Maecenas nec libero urna. Phasellus faucibus tincidunt leo. In orci nisl, varius eleifend interdum non, laoreet non dolor. Aenean id elementum augue, nec scelerisque erat. Maecenas id volutpat ex, sit amet tincidunt augue. Nunc eget ipsum et orci consectetur suscipit. Quisque pulvinar elementum lorem, non pulvinar lectus bibendum non. In tristique dolor vitae mauris volutpat, ac sollicitudin est scelerisque.
    
    Duis porttitor nibh eget elit imperdiet viverra. Pellentesque non tincidunt tellus. Duis condimentum vel orci nec tempor. Donec finibus urna vitae eros tristique ultricies. Duis sagittis cursus luctus. Pellentesque malesuada massa ut erat commodo, eu pellentesque sem viverra. Mauris nec molestie nisl, ut cursus tortor. Quisque consequat turpis sapien, et commodo ex imperdiet ut. Sed porttitor ullamcorper nunc, sagittis elementum tellus fermentum in. Aliquam vel interdum eros, id molestie tellus. Nullam nisl turpis, sodales vel nisl at, pharetra sagittis erat. Phasellus mattis sem eu ante egestas, quis auctor sapien lacinia. Aenean volutpat facilisis urna sit amet suscipit. Integer a scelerisque ex.
    
    Integer lacinia, lacus at lacinia venenatis, diam mauris efficitur ante, a congue velit odio ac lectus. Donec tristique urna quis auctor sodales. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc in mollis sem. Aliquam non nulla risus. Praesent tincidunt malesuada mauris, dapibus vestibulum eros volutpat in. Donec porttitor non metus eget mollis. Nunc nec libero nec ligula pretium auctor.
    
    Vestibulum efficitur, nisi non fermentum lacinia, lacus sapien eleifend urna, et congue risus elit convallis neque. Aenean vitae massa diam. Mauris id libero sit amet sapien dignissim rutrum sed nec ante. Aliquam leo neque, consequat nec varius at, molestie id leo. Maecenas eu elit diam. Sed elementum, nulla vel congue laoreet, velit metus commodo elit, vitae placerat lorem lorem ac erat. Sed laoreet, odio vitae imperdiet commodo, urna quam aliquam massa, a porttitor augue orci nec massa. Suspendisse at diam nibh. Nullam sollicitudin augue arcu, id facilisis lacus placerat vitae. Morbi erat felis, facilisis non sapien imperdiet, condimentum posuere lorem. Quisque a nisl vel augue suscipit sagittis eu sed orci. Suspendisse feugiat in ligula eget fermentum.
    
    Aenean tincidunt diam gravida pellentesque feugiat. Maecenas arcu tortor, pellentesque id feugiat at, semper nec felis. Suspendisse potenti. Nunc ultrices congue justo, sed euismod nibh euismod eget. Vivamus hendrerit arcu sit amet neque fringilla, non finibus risus facilisis. Nam pellentesque, augue ut porta auctor, diam risus imperdiet augue, semper vehicula lorem neque rutrum orci. Nunc vitae odio tempor, lobortis ipsum quis, elementum mi. Integer ac lectus facilisis, fermentum quam sit amet, sodales risus. Aenean sit amet cursus turpis, eget porta nunc. Nunc aliquet, quam eu faucibus tristique, tortor enim aliquet diam, et vehicula tortor libero ut tortor. Sed commodo tristique vehicula. Nam at tortor ut ex gravida placerat. Mauris tincidunt metus eu semper pretium. Phasellus interdum, massa eget condimentum malesuada, orci purus sodales lorem, non pharetra elit arcu ornare ex. Pellentesque vel nunc id justo mollis ornare.
    
    In lobortis leo ac est dapibus, a pretium nulla tristique. Nullam sed urna eu lorem sodales molestie quis et diam. Proin faucibus tellus nec ligula facilisis dictum. Suspendisse mattis metus risus, eu aliquam dolor ullamcorper id. Ut posuere velit scelerisque justo aliquet, a sollicitudin nulla tristique. Quisque a elit efficitur lectus efficitur faucibus. Pellentesque lobortis non nibh a molestie.
    
    Nullam auctor nulla at ex interdum ullamcorper. Phasellus auctor sagittis eros, at faucibus eros rutrum ut. Aenean sit amet mi ornare, finibus nisl eget, fermentum neque. Nunc pharetra porttitor dui, sit amet ullamcorper nisl lacinia ut. Integer feugiat, velit quis commodo tristique, justo metus faucibus enim, sit amet faucibus orci nibh vitae erat. Mauris tempor ut ex dictum ullamcorper. Nam in ipsum nec massa aliquet vehicula. Sed pretium euismod libero, et aliquam ligula hendrerit ut. Praesent blandit tortor in velit tristique, ut ultrices ex convallis. Ut id arcu vel nibh vehicula volutpat ac viverra metus. Duis egestas ante eget neque imperdiet, vitae tincidunt mi venenatis. Phasellus pellentesque, purus hendrerit luctus suscipit, sapien nisi hendrerit mauris, non semper velit metus sit amet justo. Proin gravida blandit metus quis suscipit. Integer laoreet enim erat, eu posuere nisi vulputate nec.
    
    Sed eu tellus eget sapien tincidunt rhoncus eu id felis. Fusce tincidunt nunc vel orci convallis vehicula et in lorem. Curabitur cursus massa ut ante vulputate, in molestie velit aliquet. Quisque et magna id ligula pulvinar luctus quis a elit. Sed nisi nulla, porta et ultricies ut, pellentesque sed velit. Quisque at blandit turpis. Duis sit amet maximus turpis, in vehicula sapien.
    
    Vivamus elit turpis, imperdiet a consectetur non, auctor et eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eget tortor metus. Nulla sollicitudin vehicula nibh vel pulvinar. In et commodo enim. Integer in vehicula augue. Vivamus sed sodales erat, et convallis mi. Donec orci libero, suscipit vel magna at, aliquet hendrerit elit. Praesent tincidunt, sem vitae mattis tempus, nisl erat eleifend arcu, in aliquet dui ante id metus. Ut vel lobortis nisi. Ut nec auctor erat, eu vestibulum sapien. Sed id mollis ex. Mauris vitae porta nibh, in condimentum diam.
    
    Morbi commodo turpis congue feugiat placerat. Nunc tellus felis, tempor in purus et, consequat egestas lacus. Integer elementum, mi ac malesuada laoreet, erat erat lacinia velit, vel interdum arcu mi non nisi. Nullam vestibulum pretium massa a sollicitudin. Quisque pulvinar, erat et gravida consequat, nibh justo faucibus neque, in vulputate eros tellus malesuada velit. Sed eget lacinia risus, ac viverra massa. Quisque aliquet rhoncus mi eget porta. Sed nulla dolor, lacinia eget tortor non, dignissim gravida neque. Curabitur arcu metus, vulputate id odio a, commodo porttitor ante.
    
    Aliquam consectetur sodales risus, eu porttitor sapien blandit ut. Aliquam finibus lacus in nisi pulvinar convallis. In imperdiet consectetur orci sit amet molestie. Etiam vitae felis porttitor lectus consectetur malesuada. Duis at finibus nulla. Proin lobortis quis eros at suscipit. Cras viverra diam vitae ipsum sagittis molestie.
    
    Phasellus sed risus semper, fermentum ante eu, tempus augue. Morbi augue turpis, dapibus vel est at, tempus mollis velit. Maecenas semper, ligula a varius dignissim, diam arcu cursus odio, iaculis ultricies nibh sem ut velit. Curabitur scelerisque, nibh ut accumsan imperdiet, ex eros ullamcorper dolor, vel molestie libero mi vitae dolor. Suspendisse et mauris ultricies, viverra dolor vitae, rutrum risus. Pellentesque pulvinar efficitur felis. Aenean auctor tellus scelerisque erat gravida hendrerit. Donec feugiat volutpat diam. Nam at placerat augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Sed condimentum ex sit amet nisi molestie, eu tincidunt risus semper. Sed metus nisl, porttitor at tellus non, iaculis iaculis purus. Quisque sollicitudin viverra augue quis facilisis. Etiam est massa, faucibus non consectetur quis, pretium in libero. Aliquam ultricies dictum nunc id dignissim. Sed luctus ornare lectus, at efficitur purus semper a. Vivamus a risus nec purus congue rhoncus. Proin imperdiet diam posuere porttitor luctus. Donec quis leo eu dui euismod porta. Nullam egestas at lacus vitae vulputate. Praesent tincidunt turpis ac magna gravida blandit. Phasellus aliquet et lacus et auctor. Maecenas vel mauris eget odio hendrerit imperdiet et eget ligula.
    
    Nunc rutrum justo non felis pellentesque, nec semper lorem finibus. Praesent at condimentum elit, laoreet elementum elit. Cras dictum accumsan eleifend. Ut ac volutpat nibh. Pellentesque id diam quis augue eleifend molestie non et purus. Donec suscipit finibus dui non malesuada. Praesent at semper massa.
    
    Donec finibus posuere nibh, aliquam ultricies nulla auctor ut. Mauris aliquam vehicula metus, vitae malesuada justo dignissim nec. Nunc accumsan faucibus mi, at molestie turpis vulputate id. Aenean congue enim sed ultrices aliquet. Vivamus tellus est, maximus et porta sed, aliquet nec erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus sit amet tincidunt purus. Mauris tempor viverra mi, eu auctor massa suscipit nec. Nullam ultrices augue in libero vestibulum fringilla. Integer vulputate tortor porttitor, imperdiet ex et, ullamcorper quam. Quisque sit amet sodales quam. Quisque nec magna ultrices, varius sapien ut, eleifend arcu. Phasellus euismod varius erat a lacinia. Vestibulum nec pellentesque dui, ut pulvinar ligula.
    
    Nunc posuere dignissim urna id ultricies. Donec at eros vitae purus feugiat tempus ut at urna. Duis rutrum commodo nulla posuere posuere. Mauris non tincidunt elit. Nulla malesuada mattis risus vel pulvinar. Donec varius quam vitae lacus feugiat, lobortis sollicitudin tortor tempor. Nam ipsum tellus, viverra vel elit et, egestas porta neque. Quisque pulvinar sem non eros luctus volutpat. Integer a turpis ligula. Phasellus mattis nisl orci, at commodo odio rhoncus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus condimentum tortor quam, vel consectetur leo consectetur non. Curabitur libero elit, ullamcorper finibus ipsum at, tempor tempus eros. Integer iaculis scelerisque fermentum.
    
    Nunc vel ipsum eu nisl tincidunt dapibus. Sed enim eros, posuere quis tellus sed, congue auctor tortor. Quisque mattis blandit lorem eget varius. Duis facilisis neque ut velit lobortis accumsan. Aenean blandit volutpat tortor non malesuada. Etiam ornare ante a turpis malesuada, lacinia ullamcorper libero volutpat. Quisque facilisis lorem vel purus venenatis pellentesque. Duis lobortis ac neque vitae sagittis. Nunc elementum sed libero id rhoncus. Suspendisse non eleifend augue. Sed quis dui laoreet, placerat odio scelerisque, sagittis dolor. Aliquam id pretium neque, vel vestibulum magna. Curabitur eget nisl ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec at semper dui.
    
    Curabitur vitae elit quis lacus ornare maximus eget sit amet nibh. Integer luctus interdum metus eget auctor. Proin vitae hendrerit ante. Nulla neque leo, sodales eget lorem ac, varius scelerisque urna. Suspendisse sit amet lacus ac diam lobortis imperdiet. Praesent at pretium tellus, efficitur pharetra velit. Sed ornare elit id felis lobortis tincidunt. Vivamus eu imperdiet elit. Aliquam consequat hendrerit nisi. Sed at ultrices nulla. Quisque fringilla posuere enim, scelerisque vehicula nisi venenatis et. Ut pretium vehicula turpis quis congue. Phasellus ornare pharetra nisi, vel tempor sem scelerisque quis. Donec vestibulum laoreet feugiat.
    
    Cras ac cursus sem. Donec eu est gravida, auctor lacus vitae, iaculis nulla. Cras gravida aliquet odio vitae laoreet. Quisque elementum, purus eget accumsan aliquam, tortor purus suscipit augue, a vehicula mauris diam sollicitudin tortor. Cras dignissim, felis maximus feugiat placerat, ligula ipsum convallis dolor, ut semper leo sapien eget sapien. Curabitur tempus vehicula risus, eget commodo lectus bibendum eu. Ut lacinia ultrices vehicula. Proin fringilla turpis in velit bibendum varius. Ut suscipit pulvinar metus, sed sagittis diam porttitor ac.
    
    In hac habitasse platea dictumst. Etiam id pulvinar arcu, scelerisque iaculis mauris. Sed eget velit ac eros tristique faucibus sit amet at sapien. Ut bibendum sem vel ligula consequat scelerisque. Curabitur at justo sed nunc mollis porta. Curabitur orci augue, molestie at fringilla suscipit, vehicula quis ligula. Nam pharetra leo ullamcorper ex convallis, sagittis malesuada nisi dictum.
    
    Donec a eros varius, tempus est in, auctor ligula. Proin nec mauris vel metus consequat interdum. Duis vitae finibus mi, sed pharetra ex. In dapibus venenatis est a lacinia. Etiam semper tristique felis, vel facilisis felis ultricies in. Fusce lectus urna, molestie ut lorem a, pulvinar tincidunt sapien. Nunc id iaculis urna. Pellentesque mi metus, hendrerit in nulla vel, aliquet dapibus lorem. Morbi lacus quam, blandit eu dolor eget, blandit tincidunt mauris. In nec vehicula risus, sit amet imperdiet dui.
    `.split("\n").map((line, index) => <Text key={index} textAlign="justify">{line}</Text>)}
    </Text>
  </Section>
);

export default Tos;