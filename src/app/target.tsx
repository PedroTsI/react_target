import { View } from "react-native";
import { router } from "expo-router";

import { colors } from "@/theme/colors";

import { PageHeader } from "@/components/PageHeader";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { CurrencyInput } from "@/components/CurrencyInput";

export default function Target(){
    return(
        <View style={{flex:1, padding: 24}}>
            <PageHeader title="Meta" subtitle="Economize para alcançar sua meta financeira." rightButton={{
                icon: "edit",
                onPress: () => {}
            }}/>

            <View style={{marginTop: 32, gap: 24}}>
                <Input label="Nome da meta" placeholder="Ex: Viagem para praia, Apple Watch"/>
                <CurrencyInput label="Valor alvo" value={24000.73}/>
                <Button title="Salvar" />
            </View>

        </View>
    )
}