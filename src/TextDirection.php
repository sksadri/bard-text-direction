<?php
/*
 * *
 *  *  * Copyright (C) optimoapps.com - All Rights Reserved
 *  *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  *  * Proprietary and confidential
 *  *  * Written by Sathish Kumar(satz) <sathish.thi@gmail.com>, ManiKandan<smanikandanit@gmail.com >
 *  *
 *
 */

namespace SKApps\BardTextAlign;

use ProseMirrorToHtml\Marks\Mark;

class TextDirection extends Mark
{
    protected $markType = 'textDirection';
    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

    public function tag(): ?array
    {
        return [
            ['tag' => 'span',
                'attrs' => [
                    'style' => "direction:{$this->mark->attrs->align};",
                ],
            ],
        ];
    }
}
