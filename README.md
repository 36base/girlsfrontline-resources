# girlsfrontline-resources

> A GirlsFrontline Resources for [36DB Team](https://github.com/36base)

Special Thanks: [gfSpinePiXi](https://github.com/cullus/gfSpinePiXi), [DDBase](http://ddb.kirsi.moe/)

## Resource management guide

[] 는 필수, () 는 선택입니다. 선택 인자가 없는경우 언더바`_` 도 사용하지 않습니다.

- `images`
    * images/equip
        > `[type]_[name].png`
        
        자세한건 [girlsfrontline-core](https://github.com/36base/girlsfrontline-core#main)에서 확인해주세요. 인게임 리소스의 한문 category/type 및 다른 부분을 영어로 1:1 대응시킵니다.

    * images/fairy
        > `.png`

    * images/gift
        > `.png`
    
    * images/guns
        > `[id]_(skinId/U)_(D).png`

        key | info
        ---|---
        id | 인형 도감번호
        skinId | 인형 스킨의 출시 순번. 1부터 시작
        U | 개장 인형
        D | 중상 일러스트

    * image/portraits
        > `[id]_(U).png`

        key | info
        ---|---
        id | 인형 도감번호
        U | 개장 인형

        **스킨 포트레이트 이미지는 사용하지 않습니다..**

    * image/skill
        > `[skillName].png`

        인게임 리소스의 이름을 변형 없이 그대로 사용합니다.
    * image/typeicons
        > `[type][rank](_r).png`
        
        36DB에서 사용할 인형 종류/등급별 이미지입니다. `_r`은 속이 투명합니다.
- spine
    > `[name]/[name]_(skin).[atlas.txt|skel.txt|png]`

    key | info
    ---|---
    name | 인형 이름
    skin | 스킨 번호(xxyy 형식)
    atlas.txt | 
    skel.txt | 
    png | 이미지 파일

    제일 기본이 되는 파일 방식. 여기서 숙소 전용 파일이 추가되기도 한다.
    이 세 요소는 필수가 아니며, 없는 경우 기본 데이터를 공유해서 쓴다.

    fileName | info
    ---|---
    R[name].atlas.txt | 숙소 전용
    R[name].skel.txt | 숙소 전용
    R[name].png | 숙소 전용
        

## License
© 2018 Digital Sky Entertainment Limited. All rights reserved.
